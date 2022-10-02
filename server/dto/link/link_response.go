package linkdto

type LinkResponse struct {
	ID          int    `json:"id"`
	Title       string `json:"title" validate:"required"`
	Description string `json:"description" validate:"required"`
	Image       string `json:"image" validate:"required"`
	TitleWeb    string `json:"titleWeb"`
	LinkWeb     string `json:"linkWeb"`
	TitleFb     string `json:"titleFb"`
	LinkFb      string `json:"linkFb"`
	TitleIg     string `json:"titleIg"`
	LinkIg      string `json:"linkIg"`
	TitleTw     string `json:"titleTw"`
	LinkTw      string `json:"linkTw"`
	TitleYt     string `json:"titleYt"`
	LinkYt      string `json:"linkYt"`
	TitleWa     string `json:"titleWa"`
	LinkWa      string `json:"linkWa"`
}
