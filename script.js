// JavaScript DOM Exercises

// ข้อ 1: การจัดการสินค้าคงคลัง
console.log("=== ข้อ 1: การจัดการสินค้าคงคลัง ===");

// สร้าง Array ของ Object สินค้า
const products = [
    { name: "เสื้อยืด", price: 350, stock: 10 },
    { name: "กางเกงยีนส์", price: 890, stock: 5 },
    { name: "รองเท้าผ้าใบ", price: 1250, stock: 0 },
    { name: "กระเป๋าเป้", price: 750, stock: 3 },
    { name: "หมวกแก๊ป", price: 280, stock: 0 },
    { name: "แว่นกันแดด", price: 420, stock: 8 }
];

// ฟังก์ชันสำหรับแสดงสินค้า
function displayProducts() {
    const productContainer = document.getElementById('product-container');
    console.log("แสดงรายการสินค้า:");
    
    products.forEach(product => {
        // สร้าง p element สำหรับแต่ละสินค้า
        const productElement = document.createElement('p');
        productElement.className = 'product';
        
        if (product.stock === 0) {
            // ถ้าสินค้าหมด ให้แสดงข้อความและเปลี่ยนสีเป็นแดง
            productElement.innerHTML = `${product.name} - ราคา: ${product.price} บาท - <span class="out-of-stock">สินค้าหมด</span>`;
            console.log(`${product.name} - ราคา: ${product.price} บาท - สินค้าหมด`);
        } else {
            productElement.innerHTML = `${product.name} - ราคา: ${product.price} บาท - คงเหลือ: ${product.stock} ชิ้น`;
            console.log(`${product.name} - ราคา: ${product.price} บาท - คงเหลือ: ${product.stock} ชิ้น`);
        }
        
        productContainer.appendChild(productElement);
    });
}

// ข้อ 2: การสร้างแกลเลอรีภาพขนาดเล็ก
console.log("=== ข้อ 2: การสร้างแกลเลอรีภาพขนาดเล็ก ===");

// สร้าง Array ของ URL รูปภาพ (ใช้ picsum.photos แทน via.placeholder)
const imageUrls = [
    "https://picsum.photos/300/300?random=1",
    "https://picsum.photos/300/300?random=2", 
    "https://picsum.photos/300/300?random=3",
    "https://picsum.photos/300/300?random=4",
    "https://picsum.photos/300/300?random=5"
];

// ฟังก์ชันสำหรับสร้างแกลเลอรี
function createGallery() {
    const gallery = document.getElementById('gallery');
    const mainImage = document.getElementById('main-image');
    
    if (!gallery || !mainImage) {
        console.log("ไม่พบ element gallery หรือ main-image");
        return;
    }
    
    // ตั้งค่ารูปแรกเป็นรูปหลัก
    mainImage.src = imageUrls[0];
    mainImage.onerror = function() {
        console.log("ไม่สามารถโหลดรูปภาพหลักได้");
        this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect width='300' height='300' fill='%23ddd'/%3E%3Ctext x='150' y='150' text-anchor='middle' fill='%23999'%3ENo Image%3C/text%3E%3C/svg%3E";
    };
    console.log("ตั้งค่ารูปภาพหลักเรียบร้อย");
    
    // สร้างรูปภาพขนาดเล็กสำหรับแต่ละ URL
    imageUrls.forEach((url, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = url;
        thumbnail.className = 'thumbnail';
        thumbnail.alt = `Thumbnail ${index + 1}`;
        
        // เพิ่ม fallback image หากโหลดไม่ได้
        thumbnail.onerror = function() {
            console.log(`ไม่สามารถโหลด thumbnail ${index + 1} ได้`);
            this.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23ddd'/%3E%3Ctext x='50' y='55' text-anchor='middle' fill='%23999'%3E${index + 1}%3C/text%3E%3C/svg%3E`;
        };
        
        // เพิ่ม event listener สำหรับการคลิก
        thumbnail.addEventListener('click', function() {
            mainImage.src = url;
            console.log(`เปลี่ยนรูปหลักเป็น: Image ${index + 1}`);
        });
        
        gallery.appendChild(thumbnail);
        console.log(`เพิ่ม thumbnail ${index + 1} เรียบร้อย`);
    });
}

// ข้อ 3: การแสดงผลหน้าเพจแบบมีเงื่อนไข
console.log("=== ข้อ 3: การแสดงผลหน้าเพจแบบมีเงื่อนไข ===");

// ตัวแปรสถานะการล็อกอิน
let isLoggedIn = false;

// ฟังก์ชันสำหรับควบคุมการแสดงผล
function updateUIBasedOnLoginStatus() {
    const userProfile = document.getElementById('user-profile');
    const guestMessage = document.getElementById('guest-message');
    
    if (isLoggedIn) {
        // ถ้าล็อกอินแล้ว แสดง user-profile และซ่อน guest-message
        userProfile.classList.remove('hidden');
        guestMessage.classList.add('hidden');
        console.log("แสดงโปรไฟล์ผู้ใช้ (สถานะ: ล็อกอินแล้ว)");
    } else {
        // ถ้ายังไม่ล็อกอิน แสดง guest-message และซ่อน user-profile
        userProfile.classList.add('hidden');
        guestMessage.classList.remove('hidden');
        console.log("แสดงข้อความสำหรับผู้เยี่ยมชม (สถานะ: ยังไม่ล็อกอิน)");
    }
}

// ฟังก์ชันสำหรับสลับสถานะการล็อกอิน
function toggleLoginStatus() {
    isLoggedIn = !isLoggedIn;
    console.log(`สลับสถานะการล็อกอิน: ${isLoggedIn ? 'ล็อกอินแล้ว' : 'ยังไม่ล็อกอิน'}`);
    updateUIBasedOnLoginStatus();
}

// รอให้ DOM โหลดเสร็จแล้วจึงรันโค้ด
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM โหลดเสร็จแล้ว เริ่มต้นการทำงาน");
    
    // เรียกใช้ฟังก์ชันทั้งหมด
    displayProducts();
    createGallery();
    updateUIBasedOnLoginStatus();
    
    // เพิ่ม event listener สำหรับปุ่มสลับสถานะการล็อกอิน
    const toggleButton = document.getElementById('toggle-login');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleLoginStatus);
        console.log("เพิ่ม event listener สำหรับปุ่มสลับล็อกอิน");
    }
    
    // เพิ่ม event listener สำหรับปุ่มเข้าสู่ระบบ
    const loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', toggleLoginStatus);
        console.log("เพิ่ม event listener สำหรับปุ่มเข้าสู่ระบบ");
    }
    
    console.log("การตั้งค่าเริ่มต้นเสร็จสิ้น");
    console.log("คลิกที่รูปภาพเล็กเพื่อเปลี่ยนรูปหลัก");
    console.log("คลิกปุ่ม 'สลับสถานะการล็อกอิน' เพื่อทดสอบ");
});

// ฟังก์ชันเพิ่มเติมสำหรับการทดสอบ
function addNewProduct(name, price, stock) {
    products.push({ name, price, stock });
    
    // ล้างและแสดงสินค้าใหม่
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    displayProducts();
    
    console.log(`เพิ่มสินค้าใหม่: ${name} - ราคา: ${price} บาท - สต็อก: ${stock} ชิ้น`);
}

// ฟังก์ชันสำหรับอัพเดตสต็อกสินค้า
function updateProductStock(productName, newStock) {
    const product = products.find(p => p.name === productName);
    if (product) {
        const oldStock = product.stock;
        product.stock = newStock;
        
        // ล้างและแสดงสินค้าใหม่
        const productContainer = document.getElementById('product-container');
        productContainer.innerHTML = '';
        displayProducts();
        
        console.log(`อัพเดตสต็อก ${productName}: ${oldStock} -> ${newStock} ชิ้น`);
    } else {
        console.log(`ไม่พบสินค้า: ${productName}`);
    }
}

console.log("script.js โหลดเสร็จแล้ว");
