# TechBlog - Web Blog với Giao Diện Tương Tự UIT

Một trang web blog hiện đại, đẹp mắt được xây dựng với HTML, CSS và JavaScript. Giao diện được thiết kế theo phong cách tương tự như trang Đại học Công Nghệ Thông Tin (UIT).

## ✨ Tính Năng

### 🎨 Giao Diện
- **Thiết kế hiện đại** với gradient colors và animations
- **Responsive design** - Hoạt động tốt trên tất cả thiết bị (desktop, tablet, mobile)
- **Dark footer** với layout thông tin liên hệ
- **Smooth scrolling** và các hiệu ứng hover mượt mà

### 📑 Các Phần Chính

1. **Header & Navigation**
   - Logo với tagline
   - Menu điều hướng sticky
   - Search functionality ready

2. **Hero Section**
   - Banner với tiêu đề lớn
   - Countdown timer tự động cập nhật
   - Background animation

3. **About Section**
   - 3 cards thông tin về blog
   - Cards có hiệu ứng hover

4. **Featured Articles**
   - 3 bài viết nổi bật
   - Hình ảnh với gradient backgrounds
   - Thông tin tác giả và ngày đăng

5. **Events Section**
   - Danh sách các sự kiện sắp tới
   - Ngày giờ sự kiện rõ ràng
   - Layout card modern

6. **Articles Grid**
   - Lưới bài viết với 6 bài mẫu
   - Các danh mục khác nhau (Backend, Frontend, Database, v.v.)
   - Thời gian đọc dự kiến

7. **Newsletter**
   - Form đăng ký email
   - Responsive design
   - Form validation

8. **Footer**
   - 4 cột thông tin
   - Links nhanh
   - Social media links
   - Copyright information

## 🚀 Cách Sử Dụng

### Chạy Website

1. **Sử dụng Live Server (Khuyến Nghị)**
   - Cài đặt extension "Live Server" trong VS Code
   - Click chuột phải vào `index.html` → "Open with Live Server"
   - Website sẽ mở tại `http://localhost:5500`

2. **Hoặc mở trực tiếp**
   - Double-click vào file `index.html`
   - Hoặc kéo file vào browser

### Các File

```
blog/
├── index.html      # File HTML chính (Cấu trúc trang)
├── styles.css      # File CSS (Styled & layout)
├── script.js       # File JavaScript (Functionality)
└── README.md       # File hướng dẫn này
```

## 🎯 Các Tính Năng JavaScript

### Countdown Timer
- Tự động đếm ngược đến ngày 08/06/2026
- Cập nhật realtime mỗi giây
- Hiển thị ngày, giờ, phút, giây

### Smooth Scroll
- Cuộn mượt mà khi click links

### Newsletter Subscription
- Form validation
- Thông báo cảm ơn người dùng

### Scroll Animations
- Các cards animate khi cuộn vào view
- Hiệu ứng slide up từ từ

### Interactive Cards
- Click vào bài viết để xem thông tin
- Hover effects trên tất cả elements

## 🎨 Màu Sắc & Thiết Kế

### Color Scheme
- **Primary:** Gradient từ xanh lam (#667eea) sang tím (#764ba2)
- **Accent:** Hồng (#f5576c)
- **Text Dark:** #2d3436
- **Text Light:** #636e72
- **Background:** #f8f9fa

### Icons & Emojis
- 📅 Ngày đăng
- ✍️ Tác giả
- ⏰ Thời gian sự kiện
- ⏱️ Thời gian đọc

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

## ✏️ Tùy Chỉnh

### Thay Đổi Tiêu Đề Blog
Sửa trong `index.html`:
```html
<h1>TechBlog</h1>
<p class="tagline">Chia Sẻ Kiến Thức Công Nghệ</p>
```

### Thay Đổi Ngày Countdown
Sửa trong `script.js`:
```javascript
const targetDate = new Date('2026-06-08').getTime();
```

### Thay Đổi Màu Sắc
Sửa trong `styles.css` - section `:root`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* ... các màu khác */
}
```

### Thêm Bài Viết Mới
Copy một `article-card` từ phần "Articles Grid" và sửa:
- Gradient background color
- Tiêu đề bài viết
- Mô tả
- Danh mục
- Ngày đăng
- Thời gian đọc

## 🔧 Tính Năng Có Thể Thêm

- [ ] Dark mode toggle
- [ ] Search functionality
- [ ] Comment section
- [ ] Author profiles
- [ ] Category filtering
- [ ] Related articles
- [ ] Social media sharing
- [ ] Read more button
- [ ] Pagination
- [ ] Database integration

## 💡 Tips

1. **Sử dụng gradient colors** để làm website đẹp hơn
2. **Thêm hover effects** để tăng interactivity
3. **Responsive design** - test trên các thiết bị khác nhau
4. **Performance** - Optimize images nếu có hình thực tế
5. **SEO** - Thêm meta tags và structured data

## 🎓 Học Từ Website Này

- HTML semantic structure
- CSS Grid & Flexbox layouts
- CSS Gradients & Animations
- Responsive Design
- JavaScript DOM manipulation
- Event listeners & handlers
- CSS variables & theming

## 📄 License

Tự do sử dụng và điều chỉnh cho dự án cá nhân hoặc thương mại.

## 👨‍💻 Tác Giả

Được tạo bởi GitHub Copilot - Blog Template 2026

---

**Chúc bạn thành công với blog của mình!** 🚀
