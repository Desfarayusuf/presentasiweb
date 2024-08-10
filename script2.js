// Menambahkan event listener untuk menghapus informasi login saat halaman ditutup atau diganti
window.addEventListener('beforeunload', function() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
});

// Menambahkan event listener untuk menghapus informasi login saat halaman dihapus atau diganti
window.addEventListener('pagehide', function() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
});