package models

// gorm berfungsi untuk mengatur tipe data atau custom tipe data

type User struct {
	ID       int    `json:"id" gorm:"primary_key:auto_increment"`
	FullName string `json:"fullName"`
	Email    string `json:"email" gorm:"type: varchar(255)"`
	Password string `json:"password" gorm:"type: varchar(255)"`
}

// berfungsi untuk relasi

type UserResponse struct {
	ID       int    `json:"id" `
	FullName string `json:"fullName"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (UserResponse) TableName() string {
	return "users"
}
