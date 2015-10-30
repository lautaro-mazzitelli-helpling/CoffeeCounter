class Buyer < ActiveRecord::Base
  has_many :coffee_boxes
end
