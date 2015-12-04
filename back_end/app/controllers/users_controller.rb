class UsersController < ApplicationController
	respond_to :json

  def index
    @users = User.all
		respond_with @users
  end
 
  def show
    @user = User.find(params[:id])
  end
	
	def new
		@user = User.new
	end
	
	def create
		o = [('a'..'z'), ('A'..'Z')].map { |i| i.to_a }.flatten
		salt = (0...50).map { o[rand(o.length)] }.join
		hash = Digest::SHA1.hexdigest (salt + user_params["password"])
		
		user = User.new
		user.username = user_params["username"]
		user.password = hash
		user.salt = salt
		
		user.save
		#if user.save
		#	redirect_to user
		#else
		#	render 'new'
		#end
	end
	
	def login
		p "login"
	end
	 
	private
		def user_params
			params.require(:user).permit(:username, :password, :salt)
		end
end