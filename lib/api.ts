export const sendEmail = (email: string, subject: string, message: string): Promise<Response> => {
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        subject: subject,
        message: message,
      }),
    };
  
    return fetch('/api/contact', requestOptions);
  };