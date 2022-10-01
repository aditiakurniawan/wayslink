package linkdto

type LinkResponse struct {
	ID          int    `json:"id"`
	Title       string `json:"title" validate:"required"`
	Description string `json:"description" validate:"required"`
	Image       string `json:"image" validate:"required"`
	TitleLink   string `json:"titlelink" `
	Link        string `json:"link"`
}
