import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {PopupWithForm} from "./PopupWithForm";
import {ImagePopup} from "./ImagePopup";
import React from 'react';


function App() {
    // Создаем стейт-переменные попапов
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false); // true или false
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false); // true или false
    const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false); // true или false
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false); // true или false
    // Создаем стейт-переменную выбранной карточки
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleCardClick(card) {
        setSelectedCard(card);
        setImagePopupOpen(true)
    }

    function handleEditAvatar() {
        setAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setAvatarPopupOpen(false)
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <div>
            <div className="page">
                <Header/>
                <Main onEditAvatar={handleEditAvatar} onAddPlace={handleAddPlaceClick}
                      onEditProfile={handleEditProfileClick} onCardClick={handleCardClick}/>
                <Footer/>
                <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} title='Редактировать профиль'
                               name='profile' buttonText='Сохранить' children={

                    <>
                        <label className="form__field">
                            <input
                                type="text"
                                className="form__item form__item_el_name"
                                id="name"
                                name="name"
                                required
                                minLength="2"
                                maxLength="40"
                            />
                            <div className="form__error-text" id="name-error"></div>
                        </label>
                        <label className="form__field">
                            <input
                                type="text"
                                className="form__item form__item_el_job"
                                id="job"
                                name="job"
                                required
                                minLength="2"
                                maxLength="200"
                            />
                            <div className="form__error-text" id="job-error"></div>
                        </label>
                    </>}/>
                <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} title='Новое место' name='add'
                               buttonText='Создать' children={
                    <>

                        <label className="form__field">
                            <input
                                type="text"
                                className="form__item form__item_el_place"
                                id="place"
                                name="place"
                                placeholder="Название"
                                required
                                minLength="1"
                                maxLength="30"
                            />
                            <div className="form__error-text" id="place-error"></div>
                        </label>
                        <label className="form__field">
                            <input
                                type="url"
                                className="form__item form__item_el_img"
                                id="img"
                                name="img"
                                placeholder="Ссылка на картинку"
                                required
                            />
                            <div className="form__error-text" id="img-error"></div>
                        </label>

                    </>}/>
                <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} title='Обновить аватар'
                               name='avatar' buttonText='Сохранить' children={<>
                    <label className="form__field">
                        <input
                            type="url"
                            className="form__item form__item_el_link"
                            id="link"
                            name="link"
                            placeholder="https://somewebsite.com/someimage.jpg"
                            required
                        />
                        <div className="form__error-text" id="link-error"></div>
                    </label>
                </>}/>
                <PopupWithForm onClose={closeAllPopups} title='Вы уверены?' name='confirm' buttonText='Да'/>
                <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
            </div>


        </div>
    );
}

export default App;