class Buyer < ActiveRecord::Base
  has_many :coffee_boxes

  validates :name,  presence: true,
                    uniqueness: true,
                    length: { maximum: 30 },
                    uniqueness: { case_sensitive: false }

  attr_accessor :amount

  after_initialize :count

  protected
  def count
    self.amount = coffee_boxes.size
  end

end
