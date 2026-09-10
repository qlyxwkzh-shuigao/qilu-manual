// 齐鲁会诊 Service Worker
// 缓存策略：stale-while-revalidate —— 有缓存先返回缓存（离线可用），
// 同时在后台拉取最新版本并更新缓存。
// 因此每月只改 data.js 无需动此文件；只有 index.html/buildings.html/本文件
// 的"页面逻辑"变化时才需要 bump CACHE_NAME 版本号（让旧缓存失效）。

const CACHE_NAME = 'qilu-v2';

const CORE = [
  '/',
  '/index.html',
  '/data.js',
  '/manifest.json',
  '/buildings.html',
  '/guide.html',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable-512.png',
  '/icon-180.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((c) => c.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;

  e.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(e.request);
      const network = fetch(e.request)
        .then((res) => {
          if (res && res.ok) cache.put(e.request, res.clone());
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
