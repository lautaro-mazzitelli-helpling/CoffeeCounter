Rails.application.routes.draw do
  resources :coffee_boxes
  resources :buyers

  root    'home#home'
end
