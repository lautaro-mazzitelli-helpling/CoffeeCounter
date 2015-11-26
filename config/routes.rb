Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'hello_world', to: 'hello_world#index'
  get 'hello_world', to: 'hello_world#index'
  resources :coffee_boxes
  resources :buyers

  root    'home#home'
end
