declare global {
    interface Window {
      $crisp: any; // You can specify a more precise type if you know it
      CRISP_WEBSITE_ID: string;
    }
  }
  
  export {};
  