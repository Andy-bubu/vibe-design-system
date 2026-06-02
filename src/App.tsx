import { useEffect, useMemo, useState } from 'react';
import { BookOpenText, Boxes, ChevronRight, Layers3 } from 'lucide-react';

import { PortalShell } from '@/components/docs/PortalShell';
import { ComponentsCatalogPage } from '@/pages/ComponentsCatalogPage';
import { DesignTokensPage } from '@/pages/DesignTokensPage';
import { HomePage } from '@/pages/HomePage';
import { QuickStartPage } from '@/pages/QuickStartPage';

const componentRoutePrefix = '/components';

export type AppRoute =
  | { page: 'home' }
  | { page: 'tokens' }
  | { page: 'components'; componentId?: string }
  | { page: 'quick-start' };

function parseRoute(pathname: string): AppRoute {
  if (pathname === '/tokens') {
    return { page: 'tokens' };
  }

  if (pathname === '/quick-start') {
    return { page: 'quick-start' };
  }

  if (pathname === componentRoutePrefix || pathname.startsWith(`${componentRoutePrefix}/`)) {
    const componentId = pathname.slice(componentRoutePrefix.length + 1) || undefined;
    return { page: 'components', componentId };
  }

  return { page: 'home' };
}

function buildPath(route: AppRoute) {
  switch (route.page) {
    case 'tokens':
      return '/tokens';
    case 'components':
      return route.componentId ? `${componentRoutePrefix}/${route.componentId}` : componentRoutePrefix;
    case 'quick-start':
      return '/quick-start';
    case 'home':
    default:
      return '/';
  }
}

function useAppRouter() {
  const [route, setRoute] = useState<AppRoute>(() => parseRoute(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseRoute(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (nextRoute: AppRoute) => {
    const nextPath = buildPath(nextRoute);
    if (nextPath === window.location.pathname) {
      setRoute(nextRoute);
      return;
    }

    window.history.pushState({}, '', nextPath);
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { route, navigate };
}

function App() {
  const { route, navigate } = useAppRouter();

  const navigationItems = useMemo(
    () => [
      {
        label: '首页',
        caption: '系统概览与入口',
        isActive: route.page === 'home',
        icon: <ChevronRight className="size-4" aria-hidden="true" />,
        onClick: () => navigate({ page: 'home' }),
      },
      {
        label: '设计令牌',
        caption: '颜色、阴影与排版规范',
        isActive: route.page === 'tokens',
        icon: <Layers3 className="size-4" aria-hidden="true" />,
        onClick: () => navigate({ page: 'tokens' }),
      },
      {
        label: '组件库',
        caption: '交互预览与代码复制',
        isActive: route.page === 'components',
        icon: <Boxes className="size-4" aria-hidden="true" />,
        onClick: () => navigate({ page: 'components', componentId: route.page === 'components' ? route.componentId : 'button' }),
      },
      {
        label: '快速上手',
        caption: 'Vibe Coding 复用指南',
        isActive: route.page === 'quick-start',
        icon: <BookOpenText className="size-4" aria-hidden="true" />,
        onClick: () => navigate({ page: 'quick-start' }),
      },
    ],
    [navigate, route],
  );

  return (
    <PortalShell navigationItems={navigationItems}>
      <div key={buildPath(route)} className="animate-route-enter">
        {route.page === 'home' ? <HomePage navigate={navigate} /> : null}
        {route.page === 'tokens' ? <DesignTokensPage /> : null}
        {route.page === 'components' ? (
          <ComponentsCatalogPage
            selectedComponentId={route.componentId ?? 'button'}
            onSelectComponent={(componentId) => navigate({ page: 'components', componentId })}
          />
        ) : null}
        {route.page === 'quick-start' ? <QuickStartPage /> : null}
      </div>
    </PortalShell>
  );
}

export default App;
