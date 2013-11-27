class CommentsController < ApplicationController

  def index
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.guest_id = Guest.find_by_email(@comment.email).id unless Guest.find_by_email(@comment.email) == nil
    if @comment.guest_id == nil
      flash[:error] = "The email entered does not match our list. Please RSVP before writing a message."
      redirect_to comments_path
    else
      if @comment.save
        flash[:success] = "Thank you for your message."
        redirect_to "/static_pages/registry"
      else
        flash[:error] = "Oops! Something went wrong. Your message was not saved."
        render comments_path
      end
    end
  end

 
  private
    def comment_params
      params.require(:comment).permit(:email, :message)
      
    end
end
