class Buyer < ActiveRecord::Base
  has_many :coffee_boxes

  validates :name,  presence: true,
                    uniqueness: true,
                    length: { maximum: 30 },
                    uniqueness: { case_sensitive: false }

  attr_accessor :amount

  def amount
    self.amount = coffee_boxes.size
  end

  def fullData
    {
      name: name,
      amount: coffee_boxes.size,
      coffee_boxes: coffee_boxes.map { |cb| { date: cb.date, buyer_id: cb.buyer_id } }
    }
  end
end
