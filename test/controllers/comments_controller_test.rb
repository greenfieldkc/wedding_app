require 'test_helper'

class CommentsControllerTest < ActionController::TestCase
  test "should get email:string" do
    get :email:string
    assert_response :success
  end

  test "should get message:text" do
    get :message:text
    assert_response :success
  end

  test "should get guest_id:integer" do
    get :guest_id:integer
    assert_response :success
  end

end
