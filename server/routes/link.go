package routes

import (
	"wayslink/handlers"
	"wayslink/pkg/middleware"
	"wayslink/pkg/mysql"
	"wayslink/repositories"

	"github.com/gorilla/mux"
)

func LinkRoutes(r *mux.Router) {
	linkRepository := repositories.RepositoryLink(mysql.DB)
	h := handlers.HandlerLink(linkRepository)

	r.HandleFunc("/links", h.FindLinks).Methods("GET")
	r.HandleFunc("/link/{id}", h.GetLink).Methods("GET")
	r.HandleFunc("/link", middleware.Auth(middleware.UploadFile(h.CreateLink))).Methods("POST")
	r.HandleFunc("/link/{id}", h.UpdateLink).Methods("PATCH")
	r.HandleFunc("/link/{id}", h.DeleteLink).Methods("DELETE")
}
