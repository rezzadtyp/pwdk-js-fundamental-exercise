// buat parent class Product
//     constructor = nama, berat, price,stok

//     buat child class dari produk yaitu Buku dan Pakaian 
//     constructor = super, data unik dari buku dan pakaian 

//     buat class OnlineShop
//     constructor = products dan cart (private)
//     method : 
//         - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products return produk sudah ada dalam toko

//         - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

//         - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi untuk uangUser tidak boleh kurang dari total pembayaran.

//         - showCatalog : menampilkan isi catalog dari toko

//         - showCart : menampilkan isi cart user

class Product {
  constructor(nama, berat, price, stok) {
    this.nama = nama;
    this.berat = berat;
    this.price = price;
    this.stok = stok;
  }
}

class Buku extends Product {
  constructor(nama, berat, price, stok, buku) {
    super(nama, berat, price, stok);
    this.buku = buku;
  }
}

class Pakaian extends Product {
  constructor(nama, berat, price, stok, pakaian) {
    super(nama, berat, price, stok);
    this.pakaian = pakaian;
  }
}

class OnlineShop {
  #products;
  #cart;
  constructor() {
    this.#products = [];
    this.#cart = [];
  }

  tambahProduk(produk) {
    if (this.#products.some(item => item.nama === produk.nama)) {
      return "produk sudah ada dalam toko";
    } else {
      this.#products.push(produk);
      return "berhasil menambahkan produk ke toko"
    }
  }

  updateStock() {
    this.#cart.forEach(item => {
      item.produk.stok -= item.jumlah;
    });
  }

  tambahKeKeranjang(produk, jumlah) {
    const productIndex = this.#products.findIndex(item => item.nama === produk.nama);
    console.log(productIndex);
    if (productIndex === -1) {
      return "produk tidak tersedia di katalog";
    } else if (this.#cart.some(item => item.nama === produk.nama)) {
      return " produk sudah ada di dalam keranjang"
    } else if (this.#products[productIndex].stok < jumlah) {
      return {
        stok: "stok tidak mencukupi",
        sisaStok: produk.stok,
      }
    } else {
      this.#cart.push({ produk, jumlah });
      this.#products[productIndex].stok -= jumlah;
      return "produk berhasil ditambahkan ke keranjang"
    }
  }

  transaksi(uangUser, jarak) {
    const totalHarga = this.#cart.reduce((total, item) => total + (item.produk.price * item.jumlah), 0);
    const ongkir = jarak * 2000;
    const uangYangHarusDibayar = totalHarga + ongkir;
    
    if (uangUser < uangYangHarusDibayar) {
      return "Uangnya kurang brok";
    } else {
      const kembalian = uangUser - uangYangHarusDibayar;
      this.#cart = [];
      return {
        uangYangHarusDibayar,
        ongkir,
        kembalian,
      };
    }
  }

  showCatalog() {
    return this.#products;
  }

  showCart() {
    return this.#cart;
  }
}


const buku1 = new Buku("Harry Potter", 0.5, 100000, 10, "Fantasy");
const buku2 = new Buku("Lord of the Rings", 0.7, 150000, 5, "Fantasy");
const pakaian1 = new Pakaian("Kaos Partai", 0.2, 50000, 20, "Cotton");
const pakaian2 = new Pakaian("Jeans", 0.8, 120000, 15, "Denim");


const onlineShop = new OnlineShop();

console.log(onlineShop.tambahProduk(buku1));
onlineShop.tambahProduk(buku2);
onlineShop.tambahProduk(pakaian1);
onlineShop.tambahProduk(pakaian2);


console.log(onlineShop.tambahKeKeranjang(buku1, 1));
console.log(onlineShop.tambahKeKeranjang(buku1, 9));
console.log(onlineShop.tambahKeKeranjang(pakaian2, 1));
console.log(onlineShop.tambahKeKeranjang(pakaian1, 25));
console.log("Cart:", onlineShop.showCart());

console.log(onlineShop.transaksi(2000000, 10))

console.log("Catalog:", onlineShop.showCatalog());
console.log("Cart:", onlineShop.showCart());
