# Aplikasi Web Sederhana (Modul ES6)

Contoh pemakaian Pustaka Kalender Jawa versi Modul ES6 di web modern.

## Bangun Image
Clone dan jalankan perintah berikut untuk membangun image

```
docker build -t mydock .
```


## Docker Hub
Kalau gak mau ribet `pull` aja image langsung dari Docker Hub.

```
docker pull junwatu/kalenderjawa-esm
```

## Test
Anda bisa menjalankan aplikasi web yang ada di image docker dengan mudah. Jika `pull` langsung dari Docker Hub

```
 docker run -p 49160:8080 -d junwatu/kalenderjawa-esm
```

Sesuaikan nama image jika anda membangun image sendiri.

Kemudian buka browser dan akses aplikasi dengan url

```http://localhost:49160```

---

2020 © https://kalenderjawa.dev
