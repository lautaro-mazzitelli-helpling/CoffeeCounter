class CoffeeBoxesController < ApplicationController
  before_action :set_coffee_box, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /coffee_boxes
  # GET /coffee_boxes.json
  def index
    @coffee_boxes = CoffeeBox.all
  end

  # GET /coffee_boxes/1
  # GET /coffee_boxes/1.json
  def show
  end

  # GET /coffee_boxes/new
  def new
    @coffee_box = CoffeeBox.new
  end

  # GET /coffee_boxes/1/edit
  def edit
  end

  # POST /coffee_boxes
  # POST /coffee_boxes.json
  def create
    @coffee_box = CoffeeBox.new(coffee_box_params)

    respond_to do |format|
      if @coffee_box.save
        format.html { redirect_to @coffee_box, notice: 'Coffee box was successfully created.' }
        format.json { render :show, status: :created, location: @coffee_box }
      else
        format.html { render :new }
        format.json { render json: @coffee_box.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /coffee_boxes/1
  # PATCH/PUT /coffee_boxes/1.json
  def update
    respond_to do |format|
      if @coffee_box.update(coffee_box_params)
        format.html { redirect_to @coffee_box, notice: 'Coffee box was successfully updated.' }
        format.json { render :show, status: :ok, location: @coffee_box }
      else
        format.html { render :edit }
        format.json { render json: @coffee_box.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /coffee_boxes/1
  # DELETE /coffee_boxes/1.json
  def destroy
    @coffee_box.destroy
    respond_to do |format|
      format.html { redirect_to coffee_boxes_url, notice: 'Coffee box was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_coffee_box
      @coffee_box = CoffeeBox.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def coffee_box_params
      params.require(:coffee_box).permit(:date, :buyer_id)
    end
end
