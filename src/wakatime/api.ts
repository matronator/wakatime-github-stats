export const TOKEN_URL = 'https://wakatime.com/oauth/token';
export const AUTHORIZE_URL = 'https://wakatime.com/oauth/authorize';

export function authorize() {
    const formData = new FormData();

    formData.append('client_id', 'c0b1b1a0-5b1e-4b7e-9f0e-7b1b1b1b1b1b');
    formData.append('response_type', 'code');
    formData.append('redirect_uri', 'https://wakatime.com/oauth/test');
    formData.append('scope', 'email,read_stats,write_stats');
    formData.append('token', import.meta.env.VITE_WAKATIME_SECRET);
}

export function getToken() {
    const formData = new FormData();

    formData.append('client_id', 'c0b1b1a0-5b1e-4b7e-9f0e-7b1b1b1b1b1b');
    formData.append('client_secret', 's0s0s0s0-1a1a-4b4b-8f8f-7b1b1b1b1b1b');
    formData.append('grant_type', 'authorization_code');
    formData.append('code', 'c0d3c0d3-c0d3-c0d3-c0d3-c0d3c0d3c0d3');
    formData.append('redirect_uri', 'https://wakatime.com/oauth/test');
}
