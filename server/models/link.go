package models

type Link struct {
	ID          int    `json:"id" gorm:"primary_key:auto_increment" `
	Title       string `json:"title" gorm:"type: varchar(255)"`
	Image       string `json:"image" gorm:"type: varchar(255)"`
	Description string `json:"description" gorm:"type:varchar(255)"`
	TitleLink   string `json:"titlelink" gorm:"type: varchar(255)"`
	Link        string `json:"link" gorm:"type:varchar(255)"`
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
