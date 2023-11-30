<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Key
 * 
 * @property int $id
 * @property int $key_status_id
 * @property string $room_name
 * 
 * @property KeyStatus $key_status
 * @property Collection|Historic[] $historics
 *
 * @package App\Models
 */
class Key extends Model
{
	protected $table = 'key';
	public $timestamps = false;

	protected $casts = [
		'id' => 'int',
		'key_status_id' => 'int'
	];

	protected $fillable = [
		'key_status_id',
		'room_name'
	];

	public function key_status()
	{
		return $this->belongsTo(KeyStatus::class);
	}

	public function historics()
	{
		return $this->hasMany(Historic::class);
	}
}
