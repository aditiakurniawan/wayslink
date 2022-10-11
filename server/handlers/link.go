package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strconv"
	linkdto "wayslink/dto/link"
	dto "wayslink/dto/result"

	"wayslink/models"
	"wayslink/repositories"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/gorilla/mux"
)

type handlerLink struct {
	LinkRepository repositories.LinkRepository
}

var PathFile = os.Getenv("PATH_FILE")

func HandlerLink(LinkRepository repositories.LinkRepository) *handlerLink {
	return &handlerLink{LinkRepository}
}

func (h *handlerLink) FindLinks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	links, err := h.LinkRepository.FindLinks()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(err.Error())
	}

	for i, p := range links {
		links[i].Image = os.Getenv("PATH_FILE") + p.Image
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: links}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerLink) GetLink(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	link, err := h.LinkRepository.GetLink(id)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}
	link.Image = os.Getenv("PATH_FILE") + link.Image

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponseLink(link)}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerLink) UpdateLink(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	request := new(linkdto.UpdateLinkRequest)
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	link, err := h.LinkRepository.GetLink(int(id))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	if request.Title != "" {
		link.Title = request.Title
	}

	if request.Description != "" {
		link.Description = request.Description
	}

	if request.Image != "" {
		link.Image = request.Image
	}
	if request.TitleWeb != "" {
		link.TitleWeb = request.TitleWeb
	}

	if request.LinkWeb != "" {
		link.LinkWeb = request.LinkWeb
	}
	if request.TitleFb != "" {
		link.TitleFb = request.TitleFb
	}

	if request.LinkFb != "" {
		link.LinkFb = request.LinkFb
	}
	if request.TitleIg != "" {
		link.TitleIg = request.TitleIg
	}

	if request.LinkIg != "" {
		link.LinkIg = request.LinkIg
	}
	if request.TitleTw != "" {
		link.TitleTw = request.TitleTw
	}

	if request.LinkTw != "" {
		link.LinkTw = request.LinkTw
	}
	if request.TitleYt != "" {
		link.TitleYt = request.TitleYt
	}

	if request.LinkYt != "" {
		link.LinkYt = request.LinkYt
	}
	if request.TitleWa != "" {
		link.TitleWa = request.TitleWa
	}

	if request.LinkWa != "" {
		link.LinkWa = request.LinkWa
	}

	data, err := h.LinkRepository.UpdateLink(link)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponseLink(data)}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerLink) DeleteLink(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	link, err := h.LinkRepository.GetLink(id)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	data, err := h.LinkRepository.DeleteLink(link)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponseLink(data)}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerLink) CreateLink(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// get data user token
	userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
	userId := int(userInfo["id"].(float64))

	fmt.Println(userId)
	dataContex := r.Context().Value("dataFile")
	filename := dataContex.(string)

	// user_id, _ := strconv.Atoi(r.FormValue("user_id"))

	request := linkdto.LinkRequest{
		Title:       r.FormValue("title"),
		Description: r.FormValue("description"),
		Image:       filename,
		TitleWeb:    r.FormValue("titleWeb"),
		LinkWeb:     r.FormValue("linkWeb"),
		TitleFb:     r.FormValue("titleFb"),
		LinkFb:      r.FormValue("linkFb"),
		TitleIg:     r.FormValue("titleIg"),
		LinkIg:      r.FormValue("linkIg"),
		TitleTw:     r.FormValue("titleTw"),
		LinkTw:      r.FormValue("linkTw"),
		TitleYt:     r.FormValue("titleYt"),
		LinkYt:      r.FormValue("linkYt"),
		TitleWa:     r.FormValue("titleWa"),
		LinkWa:      r.FormValue("linkWa"),
		User_Id:     userId,
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	link := models.Link{
		Title:       request.Title,
		Description: request.Description,
		Image:       filename,
		TitleWeb:    request.TitleWeb,
		LinkWeb:     request.LinkWeb,
		TitleFb:     request.TitleFb,
		LinkFb:      request.LinkFb,
		TitleIg:     request.TitleIg,
		LinkIg:      request.LinkIg,
		TitleTw:     request.TitleTw,
		LinkTw:      request.LinkTw,
		TitleYt:     request.TitleYt,
		LinkYt:      request.LinkYt,
		TitleWa:     request.TitleWa,
		LinkWa:      request.LinkWa,
		UserID:      request.User_Id,
	}

	data, err := h.LinkRepository.CreateLink(link)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	link, _ = h.LinkRepository.GetLink(data.ID)

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponseLink(link)}
	json.NewEncoder(w).Encode(response)
}

func convertResponseLink(u models.Link) linkdto.LinkResponse {
	return linkdto.LinkResponse{
		ID:          u.ID,
		Title:       u.Title,
		Description: u.Description,
		Image:       u.Image,
		TitleWeb:    u.TitleWeb,
		LinkWeb:     u.LinkWeb,
		TitleFb:     u.TitleFb,
		LinkFb:      u.LinkFb,
		TitleIg:     u.TitleIg,
		LinkIg:      u.LinkIg,
		TitleTw:     u.TitleTw,
		LinkTw:      u.LinkTw,
		TitleYt:     u.TitleYt,
		LinkYt:      u.LinkYt,
		TitleWa:     u.TitleWa,
		LinkWa:      u.LinkWa,
		User:        u.User,
	}
}
