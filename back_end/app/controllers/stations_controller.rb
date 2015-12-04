class StationsController < ApplicationController
  respond_to :json
  
  def index
		@stations = Station.only(:name, :longitude, :latitude)
		
		respond_with @stations
  end
  
  def one
		@station = Station.find(params[:id])
		
		respond_with @station
	end
end
