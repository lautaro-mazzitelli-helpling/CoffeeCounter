require 'test_helper'

class CoffeeBoxesControllerTest < ActionController::TestCase
  setup do
    @coffee_box = coffee_boxes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:coffee_boxes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create coffee_box" do
    assert_difference('CoffeeBox.count') do
      post :create, coffee_box: { date: @coffee_box.date, user_id: @coffee_box.user_id }
    end

    assert_redirected_to coffee_box_path(assigns(:coffee_box))
  end

  test "should show coffee_box" do
    get :show, id: @coffee_box
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @coffee_box
    assert_response :success
  end

  test "should update coffee_box" do
    patch :update, id: @coffee_box, coffee_box: { date: @coffee_box.date, user_id: @coffee_box.user_id }
    assert_redirected_to coffee_box_path(assigns(:coffee_box))
  end

  test "should destroy coffee_box" do
    assert_difference('CoffeeBox.count', -1) do
      delete :destroy, id: @coffee_box
    end

    assert_redirected_to coffee_boxes_path
  end
end
