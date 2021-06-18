import { createApp } from 'vue'
import App from './App.vue'
import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const appInsights = new ApplicationInsights({ config: {
  instrumentationKey: '2608f7ca-16c4-4d95-a308-6f3c1872c329'
  /* ...Other Configuration Options... */
} });
appInsights.loadAppInsights();
appInsights.trackPageView();

createApp(App).mount('#app')
