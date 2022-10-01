package linkdto

type LinkRequest struct {
	ID          int    `json:"id"`
	Title       string `json:"title" form:"title" gorm:"type: varchar(255)"`
	Description string `json:"description" form:"description" gorm:"type: varchar(255)" validate:"required"`
	Image       string `json:"image" form:"image" gorm:"type: varchar(255)" validate:"required"`
	TitleLink   string `json:"titlelink" form:"titlelink" gorm:"type: varchar(255)" `
	Link        string `json:"link" form:"link" gorm:"type: varchar(255)"`
}

type UpdateLinkRequest struct {
	Title       string `json:"title" form:"title"`
	Image       string `json:"thumbnail" form:"thumbnail"`
	Description string `json:"description" form:"description"`
}
