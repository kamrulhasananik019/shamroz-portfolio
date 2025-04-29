import { kv as vkv } from "@vercel/kv";

const prefix = "ksk_";

export const kv = {
    get: (value: string) => vkv.get(`${prefix}:${value}`),
    set: (key: string, value: string) => vkv.set(`${prefix}:${key}`, value),
    del: (key: string) => vkv.del(`${prefix}:${key}`),
}