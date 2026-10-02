# Privacy Policy / Kebijakan Privasi — Dicoling

> **Judul dokumen:** Privacy Policy / Kebijakan Privasi Dicoling
> **Aplikasi:** Dicoling — Dictionnaire de Linguistique (Kamus Istilah Linguistik Indonesia–Prancis)
> **Paket Android:** `com.dwipayogi.dicoling` · **Versi:** 2.0.0 · **VersionCode Android:** 3
> **Pengembang (Entity):** Tim Dicoling — Universitas Negeri Yogyakarta (Fakultas Bahasa, Seni, dan Budaya / FBSB)
> **Kontak privasi:** dicolingdev@gmail.com
> **URL publik kebijakan ini:** https://dicoling.vercel.app/privacy-policy
> **Kebijakan dalam aplikasi:** Profil / Pengaturan → Kebijakan Privasi (`app/home/kebijakan-privasi.tsx`)
> **Tanggal efektif / Last updated:** 2 Oktober 2026
> **Bahasa:** Indonesia dan Inggris (Prancis tersedia di dalam aplikasi; substansi sama)

Dokumen ini adalah sumber tunggal untuk tautan Play Console (field Privacy Policy) dan teks di dalam aplikasi.
Dilarang mengunggah dokumen ini sebagai PDF — gunakan URL di atas (aktif, publik, non-geofenced, non-editable).

---

## A. Bahasa Indonesia

### 1. Pendahuluan
Dicoling menghargai privasi Anda. Dicoling adalah aplikasi kamus linguistik dwibahasa
(Indonesia–Prancis) yang **berfungsi penuh secara offline, tanpa akun, tanpa login,
tanpa registrasi, tanpa iklan, dan tanpa pelacakan**. Dokumen ini menjelaskan secara
komprehensif bagaimana aplikasi **mengakses, mengumpulkan, menggunakan, menangani,
dan membagikan** data pengguna dan perangkat — sesuai kebijakan Google Play User Data
(https://support.google.com/googleplay/android-developer/answer/10144311).

### 2. Ringkasan satu paragraf
**Kami tidak mengumpulkan, tidak mengirim, tidak menjual, dan tidak membagikan data
pribadi apa pun.** Satu-satunya data yang disimpan adalah **preferensi bahasa antarmuka
(ID/FR)** di perangkat Anda. Database kamus (`kamus.db`) sudah termasuk di installer
dan hanya dibaca secara lokal. Fitur salin hanya menulis teks ke clipboard atas
perintah Anda dan tidak dikirim ke mana pun.

### 3. Data yang TIDAK kami akses / kumpulkan / bagikan
- Nama, alamat email, password, foto profil, nomor telepon, kontak, kalender.
- Lokasi presisi/kasar, mikrofon/audio, kamera/galeri, sensor kesehatan, file pengguna.
- Riwayat pencarian, isi clipboard (kami tidak pernah membaca clipboard), daftar aplikasi terinstal.
- Identifier permanen (IMEI, IMSI, nomor seri SIM) maupun identifier yang dapat direset
  (Android Advertising ID, App Set ID) — **tidak diakses dan tidak ditautkan ke data apa pun**.
- Data anak-anak — aplikasi tidak ditujukan untuk anak di bawah 13 tahun (lihat §11).
- Kredensial login — tidak ada sistem akun sehingga tidak ada kredensial.

### 4. Data terbatas yang disimpan di perangkat (on-device only)
| Data | Teknologi | Isi | Ditransmisikan? | Dibagikan? |
|---|---|---|---|---|
| Preferensi bahasa UI | `AsyncStorage` kunci `@dicoling_language` (`contexts/LanguageContext.tsx`) | `"ID"` atau `"FR"` saja | Tidak | Tidak |
| Leksikon kamus | `expo-sqlite`, file `assets/db/kamus.db` (read-only, FTS5) via `services/repository.ts` (hanya `SELECT`) | Istilah, definisi, sitasi, contoh, analisis (konten publik akademik, bukan data pengguna) | Tidak | Tidak |
| Salinan manual | `expo-clipboard` `setStringAsync()` di `app/home/[category]/[term].tsx:268` | Teks istilah yang Anda ketuk "Salin" | Tidak | Tidak (hanya ke clipboard OS; terhapus saat restart / ditimpa) |

Tidak ada `INSERT/UPDATE/DELETE` data pengguna, tidak ada riwayat pencarian yang disimpan,
tidak ada `fetch`/`axios`/`WebSocket`, tidak ada backend/API key/domain pelacakan.

### 5. Penggunaan data
Preferensi bahasa hanya dipakai untuk menampilkan antarmuka dan memilih kolom bahasa
(`id`/`fr`) dari database lokal. Tidak dipakai untuk iklan, profiling, pengukuran,
atau personalisasi lintas aplikasi.

### 6. Berbagi, pihak ketiga, SDK, iklan, penjualan
- **Tidak ada pihak ketiga / SDK pengumpul data** (tanpa Firebase, Analytics, Crashlytics, AdMob, Facebook SDK).
- **Tidak ada penjualan data** dalam arti apa pun, termasuk transfer dengan imbalan uang.
- **Tidak ada server kami** — sehingga tidak ada transmisi jaringan berisi data pengguna
  (HTTPS N/A karena tidak ada upload). Transfer data ke penyedia layanan / hukum / merger
  tidak terjadi karena tidak ada data yang dikumpulkan.
- Dependensi yang tersisa (`expo-sqlite, async-storage, expo-clipboard, expo-image, expo-font,
  expo-router, reanimated, gesture-handler, flash-list, safe-area`) hanya untuk UI/penyimpanan
  lokal dan tidak mengumpulkan data.

### 7. Izin (permissions) Android
Build production hanya meminta:
- `android.permission.INTERNET` dan `ACCESS_NETWORK_STATE` — izin normal bawaan Expo,
  **tidak dipakai untuk mengirim data pengguna** (tidak ada kode jaringan di aplikasi).

Kami **tidak meminta dan tidak menggunakan** saat runtime:
`CAMERA`, `READ/WRITE_EXTERNAL_STORAGE`, `READ_MEDIA_*`, `RECORD_AUDIO` (mikrofon),
`ACCESS_FINE/COARSE_LOCATION`, `READ_CONTACTS`, `POST_NOTIFICATIONS`,
`SYSTEM_ALERT_WINDOW`, `VIBRATE`.

> Catatan teknis: `android/` adalah folder generated (di-`.gitignore`) dan dependensi tak
> terpakai `expo-image-picker` + `expo-network` telah dihapus dari `package.json`, serta
> `app.json → android.permissions` dikunci ke `["INTERNET"]` agar permission sensitif
> tidak ikut tergabung (merge) kembali ke AAB. Verifikasi dengan
> `manifest-merger-release-report.txt` sebelum upload.

Tidak ada permintaan runtime permission, sehingga **Prominent Disclosure & Consent
tidak diperlukan** — tidak ada dialog izin yang mendahului pengumpulan data sensitif
karena tidak ada pengumpulan tersebut.

### 8. Keamanan
Karena tidak ada transmisi/pengumpulan, risiko kebocoran server nihil. Data on-device
dilindungi sandbox OS Android/iOS. Kami tidak menautkan identifier permanen ke identifier
resettable maupun ke data pribadi, sesuai larangan User Data policy.

### 9. Retensi dan penghapusan
- Preferensi bahasa: tersimpan sampai Anda menghapusnya via **Pengaturan Android →
  Aplikasi → Dicoling → Penyimpanan → Hapus data** atau uninstall.
- Clipboard: tidak dipertahankan aplikasi; dikelola OS.
- Database kamus: bagian dari aplikasi, bukan data pengguna; terhapus saat uninstall.
- **Penghapusan akun (Account Deletion): tidak berlaku (N/A)** — tidak ada pembuatan akun
  di dalam aplikasi, sehingga tidak ada endpoint hapus akun in-app maupun web yang
  diwajibkan. Jika Anda menghubungi kami, kami tidak memiliki data akun untuk dihapus.

### 10. Hak pengguna
Menggunakan aplikasi anonim tanpa registrasi; mengubah bahasa kapan saja di Pengaturan;
menghapus preferensi lokal via Hapus data/uninstall; menghubungi kami untuk pertanyaan.

### 11. Anak-anak
Dicoling adalah referensi akademik untuk mahasiswa, dosen, peneliti, penerjemah, dan peminat linguistik (umum/dewasa).

### 12. Perubahan kebijakan
Perubahan materiil akan diperbarui di URL publik + halaman in-app dengan tanggal baru.
Penggunaan berkelanjutan setelah pembaruan dianggap persetujuan.

### 13. Konsistensi Data Safety (Play Console)
Isi yang harus dipilih agar konsisten dengan dokumen ini:
- **Data collected:** No personal data collected · No data shared with third parties.
- **Location, Photos, Contacts, Account, Browsing:** tidak dikumpulkan/dibagikan.
- **Account deletion:** N/A (no account creation).
- **Ads / App Set ID / Advertising ID:** tidak digunakan.

---

## B. English

### 1. Introduction
Dicoling respects your privacy. Dicoling is a bilingual (Indonesian–French) linguistics
dictionary that **works fully offline, with no account, no login, no registration,
no ads, and no tracking**. This policy comprehensively discloses how the app
**accesses, collects, uses, handles, and shares** user and device data, per the
Google Play User Data policy (https://support.google.com/googleplay/android-developer/answer/10144311).

### 2. Summary
**We do not collect, transmit, sell, or share any personal data.** The only stored data
is the **UI language preference (ID/FR)** on your device. The dictionary database
(`kamus.db`) ships inside the installer and is read locally. Copy only writes text to
the clipboard when you tap it and is never transmitted.

### 3. Data we do NOT access / collect / share
Name, email, password, profile photo, phone, contacts, calendar; precise/coarse location;
microphone/audio; camera/gallery; health sensors; user files; search history; clipboard
contents (we never read the clipboard); installed-app inventory; persistent identifiers
(IMEI, IMSI, SIM serial) or resettable identifiers (Advertising ID, App Set ID) —
**never accessed nor linked**; children's data (not directed to children under 13, §11);
login credentials (no account system exists).

### 4. Limited on-device data (only)
| Data | Technology | Content | Transmitted? | Shared? |
|---|---|---|---|---|
| UI language preference | `AsyncStorage` key `@dicoling_language` | `"ID"` or `"FR"` only | No | No |
| Dictionary lexicon | `expo-sqlite`, bundled `assets/db/kamus.db` (read-only FTS5, `SELECT`-only) | Public academic terms/definitions/citations/examples (not user data) | No | No |
| Manual copy | `expo-clipboard` `setStringAsync()` | Term text you tap to copy | No | No (OS clipboard only) |

No user-data writes, no stored search history, no `fetch`/`axios`/`WebSocket`, no backend.

### 5. Use
Language preference only selects UI strings and the local DB language column (`id`/`fr`).
Never used for ads, profiling, measurement, or cross-app personalization.

### 6. Sharing, third parties, SDKs, ads, sale
No data-collecting third parties/SDKs (no Firebase/Analytics/Crashlytics/AdMob);
no sale of data; no first-party server (so no user-data transmission — HTTPS N/A);
remaining dependencies are local UI/storage only.

### 7. Android permissions
Production build requests only `INTERNET` + `ACCESS_NETWORK_STATE` (normal Expo defaults,
**not used to transmit user data** — the app contains no networking code). We do **not**
request or use `CAMERA`, storage, microphone, location, contacts, notifications,
`SYSTEM_ALERT_WINDOW`, or `VIBRATE` at runtime. No runtime permission requests, so no
Prominent Disclosure & Consent flow is required.

### 8. Security
No collection/transmission means no server-breach surface. On-device data is protected
by the Android/iOS sandbox. We never link persistent IDs to resettable IDs or personal data.

### 9. Retention and deletion
Language preference persists until **Android Settings → Apps → Dicoling → Storage → Clear
data** or uninstall. Clipboard is OS-managed. The bundled DB is app content, removed on
uninstall. **Account deletion: N/A** — no in-app account creation exists, so no in-app
or web deletion endpoint is required.

### 10. Your rights
Use anonymously; change language anytime; clear local preference via Clear data/uninstall;
contact us with questions.

### 11. Children
Academic reference for university students, lecturers, researchers, translators, and linguistics enthusiasts (general/adult audience).

### 12. Changes
Material changes will update this public URL and the in-app page with a new date.
Continued use after an update constitutes acceptance.

### 13. Data safety consistency
Select in Play Console: **No personal data collected · No data shared · No location/
photos/contacts/account · Account deletion N/A · No ads / App Set ID / Advertising ID.**

---

## C. Kepatuhan & daftar periksa rilis (ID)

- [x] Nama aplikasi (`Dicoling`) + entity (`Tim Dicoling — Universitas Negeri Yogyakarta`) + kontak (`dicolingdev@gmail.com`) tercantum.
- [x] Jenis data, penggunaan, berbagi, keamanan, retensi/penghapusan, anak, dan Data Safety diungkap.
- [x] Tersedia di 2 tempat: URL publik (di atas) untuk Play Console + teks di dalam aplikasi.
- [ ] Hosting: terbitkan file ini sebagai halaman HTML di `https://dicoling.vercel.app/privacy-policy` (bukan PDF, publik, non-geofenced).
- [ ] Play Console: tempel URL di field Privacy Policy + isi Data Safety persis §A.13 + Target audience dewasa (bukan Families) + Account deletion N/A.
- [ ] Build: hapus `expo-image-picker` + `expo-network`, kunci `android.permissions`, verifikasi merger report, uji `npx expo start` + `tsc --noEmit`.

*Referensi: Google Play User Data policy — https://support.google.com/googleplay/android-developer/answer/10144311?ref_topic=9877467*
