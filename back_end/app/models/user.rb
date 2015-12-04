class User
  include Mongoid::Document
  field :username, type: String
  field :password, type: String
  field :salt, type: String
end
