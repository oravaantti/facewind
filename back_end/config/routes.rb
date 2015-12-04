Rails.application.routes.draw do
  #resources :stations, defaults: {format: :json}
	
	get "/stations/", to: "stations#index", defaults: {format: :json}
	get "/stations/:id", to: "stations#one", defaults: {format: :json}
	
	get "/users/new/:username/:password", to: "users#new"
	#resources :users, defaults: {format: :json}
end