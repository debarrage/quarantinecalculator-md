import { ApplicationInsights } from "@microsoft/applicationinsights-web";

// See: https://docs.microsoft.com/en-us/azure/azure-monitor/app/javascript
const appInsights = new ApplicationInsights({ config: {
    instrumentationKey: process.env.REACT_APP_INSTRUMENTATION_KEY,
    loggingLevelConsole: 0,
    loggingLevelTelemetry: 1,
} });

export function initializeTelemetry() {    
    appInsights.loadAppInsights();
    appInsights.trackPageView();
}

