npm install -g json-server@0.17.0

npm init

enter -> enter ....

- Vào packgage.json thêm đoạn sau vào phần "scripts"

```json
"scripts": {
    "dev": "json-server --watch db.json --port 3000"
  },
```

npm install json-server@0.17.0 --save-dev

npm run dev

- Có thể thay đổi dữ liệu trong file db.json - file này đóng vai trò như một database để json-server có thể đọc và trả về dữ liệu khi có request đến.
