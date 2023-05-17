export const TOKEN_URL = 'https://wakatime.com/oauth/token';
export const AUTHORIZE_URL = 'https://wakatime.com/oauth/authorize';

export function authorize() {
    const formData = new FormData();

    formData.append('client_id', import.meta.env.VITE_WAKATIME_APPID);
    formData.append('response_type', 'code');
    formData.append('redirect_uri', 'https://wakatime-github-stats.vercel.app');
    formData.append('scope', 'email,read_stats,write_stats');
    formData.append('token', import.meta.env.VITE_WAKATIME_SECRET);

    return fetch(AUTHORIZE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/www-form-urlencoded',
        },
        body: formData
    });
}

export function getToken(code: string) {
    const formData = new FormData();

    formData.append('client_id', import.meta.env.VITE_WAKATIME_APPID);
    formData.append('client_secret', import.meta.env.VITE_WAKATIME_SECRET);
    formData.append('grant_type', 'authorization_code');
    formData.append('code', code);
    formData.append('redirect_uri', 'https://wakatime.com/oauth/test');

    return fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/www-form-urlencoded',
        },
        body: formData
    });
}

export async function connect() {
    const response = await authorize();
    const url = new URL(response.url);
    const code = url.searchParams.get('code');

    if (code) {
        const token = await getToken(code);
        console.log(token);
    }
}
