package models

type Link struct {
	ID          int    `json:"id" gorm:"primary_key:auto_increment" `
	Title       string `json:"title" gorm:"type: varchar(255)"`
	Image       string `json:"image" gorm:"type: varchar(255)"`
	Description string `json:"description" gorm:"type:varchar(255)"`
	TitleWeb    string `json:"titleWeb" gorm:"type: varchar(255)" `
	LinkWeb     string `json:"linkWeb"  gorm:"type: varchar (255)"`
	TitleFb     string `json:"titleFb" gorm:"type: varchar(255)" `
	LinkFb      string `json:"linkFb"  gorm:"type: varchar(255)"`
	TitleIg     string `json:"titleIg" gorm:"type: varchar(255)" `
	LinkIg      string `json:"linkIg"  gorm:"type: varchar(255)"`
	TitleTw     string `json:"titleTw" gorm:"type: varchar(255)" `
	LinkTw      string `json:"linkTw"  gorm:"type: varchar(255)"`
	TitleYt     string `json:"titleYt"  gorm:"type: varchar(255)" `
	LinkYt      string `json:"linkYt"  gorm:"type: varchar(255)"`
	TitleWa     string `json:"titleWa" gorm:"type: varchar(255)" `
	LinkWa      string `json:"linkWa"  gorm:"type: varchar(255)"`
	// Sosmeds     []Sosmed `json:"sosmed"`
}

type Sosmed struct {
	ID    int    `json:"id" gorm:"primary_key:auto_increment" `
	Title string `json:"title" gorm:"type: varchar(255)"`
	Image string `json:"image" gorm:"type: varchar(255)"`
	Url   string `json:"Url" gorm:"type:varchar(255)"`
}

type LinkResponse struct {
	ID          int    `json:"id" `
	Title       string `json:"title"`
	Image       string `json:"image"`
	Description string `json:"description"`
}

func (LinkResponse) TableName() string {
	return "links"
}
