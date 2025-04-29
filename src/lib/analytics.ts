
// Simple interface for tracking visitor metrics
export interface VisitMetrics {
  pageViews: number;
  uniqueVisitors: number;
  averageTimeOnSite: number;
  referrers: Record<string, number>;
  pages: Record<string, number>;
}

class AnalyticsService {
  private sessionStartTime: number;
  private lastPageViewTime: number | null = null;
  private currentPage: string = '';

  constructor() {
    this.sessionStartTime = Date.now();
    this.initializeGoatCounter();
  }

  private initializeGoatCounter() {
    // Create GoatCounter script
    const script = document.createElement('script');
    script.setAttribute('data-goatcounter', 'https://savoria.goatcounter.com/count');
    script.setAttribute('async', 'true');
    script.setAttribute('src', '//gc.zgo.at/count.js');
    
    // Add to document
    document.head.appendChild(script);
    
    // Initialize window.goatcounter namespace
    window.goatcounter = window.goatcounter || {};
    
    // Set up GoatCounter to track time on site
    const originalCount = window.goatcounter.count;
    window.goatcounter.count = function(vars: any) {
      // Add time on site data
      if (vars && !vars.event) {
        vars.p = (vars.p || '') + '&time=' + Math.round((Date.now() - this.sessionStartTime) / 1000);
      }
      
      return originalCount ? originalCount.call(window.goatcounter, vars) : undefined;
    }.bind(this);
  }

  trackPageView(page: string = window.location.pathname) {
    this.currentPage = page;
    this.lastPageViewTime = Date.now();
    
    // Use GoatCounter for pageview tracking
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      window.goatcounter.count({
        path: page,
      });
    }
    
    console.log(`[Analytics] Page view: ${page}`);
    return this;
  }

  trackEvent(category: string, action: string, label?: string) {
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      window.goatcounter.count({
        path: `${category}/${action}${label ? '/' + label : ''}`,
        event: true,
        title: `${category} - ${action}`,
      });
    }
    
    console.log(`[Analytics] Event: ${category} / ${action} / ${label || '-'}`);
    return this;
  }

  getSessionDuration(): number {
    return Math.round((Date.now() - this.sessionStartTime) / 1000);
  }
}

// Add to window global
declare global {
  interface Window {
    goatcounter?: any;
    analytics?: AnalyticsService;
  }
}

// Create singleton instance
const analytics = new AnalyticsService();

// Export singleton
export default analytics;
