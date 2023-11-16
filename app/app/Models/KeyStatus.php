<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class KeyStatus
 * 
 * @property int $id
 * @property string $status
 * 
 * @property Collection|Key[] $keys
 *
 * @package App\Models
 */
class KeyStatus extends Model
{
	protected $table = 'key_status';
	public $timestamps = false;

	protected $fillable = [
		'status'
	];

	public function keys()
	{
		return $this->hasMany(Key::class);
	}
}
