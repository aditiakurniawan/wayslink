package repositories

import (
	"wayslink/models"

	"gorm.io/gorm"
)

type LinkRepository interface {
	FindLinks() ([]models.Link, error)
	GetLink(ID int) (models.Link, error)
	CreateLink(link models.Link) (models.Link, error)
	UpdateLink(link models.Link) (models.Link, error)
	DeleteLink(link models.Link) (models.Link, error)
}

func RepositoryLink(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindLinks() ([]models.Link, error) {
	var links []models.Link
	err := r.db.Find(&links).Error

	return links, err
}

func (r *repository) GetLink(ID int) (models.Link, error) {
	var link models.Link
	err := r.db.First(&link, ID).Error

	return link, err
}

func (r *repository) CreateLink(link models.Link) (models.Link, error) {
	err := r.db.Create(&link).Error

	return link, err
}

func (r *repository) UpdateLink(link models.Link) (models.Link, error) {
	err := r.db.Save(&link).Error

	return link, err
}

func (r *repository) DeleteLink(link models.Link) (models.Link, error) {
	err := r.db.Delete(&link).Error

	return link, err
}
