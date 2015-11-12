class HomeController < ApplicationController

  def home
    @buyers = Buyer.all.sort_by { |buyer|  - buyer.amount }.map(&:fullData)
    @buyer  = Buyer.new
  end
end