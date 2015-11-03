class Buyer < ActiveRecord::Base
  has_many :coffee_boxes
  attr_accessor :amount

  after_initialize :count

  protected
  def count
    self.amount = coffee_boxes.size
  end

end
