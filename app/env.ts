import 'server-only';

export const APPS = JSON.parse(process.env.APPS || '[]') as string[];
export const TOKEN = process.env.TOKEN || '';
