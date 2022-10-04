package linkdto

type LinkRequest struct {
	ID          int    `json:"id"`
	Title       string `json:"title" form:"title" gorm:"type: varchar(255)"`
	Description string `json:"description" form:"description" gorm:"type: varchar(255)" validate:"required"`
	Image       string `json:"image" form:"image" gorm:"type: varchar(255)" validate:"required"`
	TitleWeb    string `json:"titleWeb" form:"titleWeb" gorm:"type: varchar(255)" `
	LinkWeb     string `json:"linkWeb" form:"linkWeb" gorm:"type: varchar (255)"`
	TitleFb     string `json:"titleFb" form:"titleFb" gorm:"type: varchar(255)" `
	LinkFb      string `json:"linkFb" form:"linkFb" gorm:"type: varchar(255)"`
	TitleIg     string `json:"titleIg" form:"titleIg" gorm:"type: varchar(255)" `
	LinkIg      string `json:"linkIg" form:"linkIg" gorm:"type: varchar(255)"`
	TitleTw     string `json:"titleTw" form:"titleTw" gorm:"type: varchar(255)" `
	LinkTw      string `json:"linkTw" form:"linkTw" gorm:"type: varchar(255)"`
	TitleYt     string `json:"titleYt" form:"titleYt" gorm:"type: varchar(255)" `
	LinkYt      string `json:"linkYt" form:"linkYt" gorm:"type: varchar(255)"`
	TitleWa     string `json:"titleWa" form:"titleWa" gorm:"type: varchar(255)" `
	LinkWa      string `json:"linkWa" form:"linkWa" gorm:"type: varchar(255)"`
}

type UpdateLinkRequest struct {
	Title       string `json:"title" form:"title"`
	Image       string `json:"thumbnail" form:"thumbnail"`
	Description string `json:"description" form:"description"`
	TitleWeb    string `json:"titleWeb" form:"titleWeb" gorm:"type: varchar(255)" `
	LinkWeb     string `json:"linkWeb" form:"linkWeb" gorm:"type: varchar (255)"`
	TitleFb     string `json:"titleFb" form:"titleFb" gorm:"type: varchar(255)" `
	LinkFb      string `json:"linkFb" form:"linkFb" gorm:"type: varchar(255)"`
	TitleIg     string `json:"titleIg" form:"titleIg" gorm:"type: varchar(255)" `
	LinkIg      string `json:"linkIg" form:"linkIg" gorm:"type: varchar(255)"`
	TitleTw     string `json:"titleTw" form:"titleTw" gorm:"type: varchar(255)" `
	LinkTw      string `json:"linkTw" form:"linkTw" gorm:"type: varchar(255)"`
	TitleYt     string `json:"titleYt" form:"titleYt" gorm:"type: varchar(255)" `
	LinkYt      string `json:"linkYt" form:"linkYt" gorm:"type: varchar(255)"`
	TitleWa     string `json:"titleWa" form:"titleWa" gorm:"type: varchar(255)" `
	LinkWa      string `json:"linkWa" form:"linkWa" gorm:"type: varchar(255)"`
}
