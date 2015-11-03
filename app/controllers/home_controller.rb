class HomeController < ApplicationController

  def home
    @buyers = Buyer.all.sort_by { |buyer|  - buyer.amount }
    @buyer  = Buyer.new
  end
end