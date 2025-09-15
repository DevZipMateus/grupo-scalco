import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load heavy components
export const LazySalaryDeliveryChart = lazy(() => import('./SalaryDeliveryChart'));
export const LazyEvolutionChart = lazy(() => import('./EvolutionChart'));
export const LazyTestimonialCarousel = lazy(() => import('./TestimonialCarousel'));
export const LazyClientLogos = lazy(() => import('./ClientLogos'));

// Loading fallbacks
export const ChartSkeleton = () => (
  <div className="w-full space-y-4">
    <Skeleton className="h-8 w-3/4 mx-auto" />
    <Skeleton className="h-64 w-full" />
    <Skeleton className="h-4 w-2/3 mx-auto" />
  </div>
);

export const CarouselSkeleton = () => (
  <div className="w-full space-y-4">
    <div className="flex gap-4 overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex-shrink-0 w-80">
          <Skeleton className="h-40 w-full rounded-lg" />
          <div className="mt-4 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const LogosSkeleton = () => (
  <div className="flex gap-6 justify-center items-center">
    {[...Array(6)].map((_, i) => (
      <Skeleton key={i} className="h-12 w-24 rounded" />
    ))}
  </div>
);

// Wrapper components with suspense
export const SalaryChartWithSuspense = () => (
  <Suspense fallback={<ChartSkeleton />}>
    <LazySalaryDeliveryChart />
  </Suspense>
);

export const EvolutionChartWithSuspense = () => (
  <Suspense fallback={<ChartSkeleton />}>
    <LazyEvolutionChart />
  </Suspense>
);

export const TestimonialCarouselWithSuspense = () => (
  <Suspense fallback={<CarouselSkeleton />}>
    <LazyTestimonialCarousel />
  </Suspense>
);

export const ClientLogosWithSuspense = () => (
  <Suspense fallback={<LogosSkeleton />}>
    <LazyClientLogos />
  </Suspense>
);