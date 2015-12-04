class Station
  include Mongoid::Document
  field :name, type: String
  field :longitude, type: Float
  field :latitude, type: Float
  field :observations, type: Array
end
