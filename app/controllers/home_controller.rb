class HomeController < ApplicationController

  def home
    @buyers = Buyer.all
  end
end