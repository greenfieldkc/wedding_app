class GuestsController < ApplicationController
  def index
  @head_count = get_head_count
  @alph_list = alphabetize_guests
  end
  
  def new
    @guest = Guest.new
  end
  
  def create
    @guest = Guest.new(guest_params)
    if @guest.save
      if @guest.num_attending == 0
        flash[:notice] = "Thank you for responding. We're sorry you can't come, but we really only invited you out of social obligation anyway, so it's not a big deal."
      else
        flash[:notice] = "Thank you for responding. See you at the wedding!"
      end
      redirect_to guests_path
    else
      flash[:notice] = "RSVP not recorded"
      render new_guest_path
    end
    
  end
  
  def get_head_count
    count = 0
    Guest.find(:all).each do |x|
      count += x.num_attending
    end
    return count
  end
  
  def alphabetize_guests
    guests = Guest.find :all
    guests.sort_by! {|g| g.last_name}
  end  
  
  private
    def guest_params
      params.require(:guest).permit(:last_name, :first_name, :email, :num_attending)
    end
  
end
