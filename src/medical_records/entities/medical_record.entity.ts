import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MedicalRecord {
    /** (
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  patient_id: number;

  @Column({ type: 'int' })
  doctor_id: number;

  @Column({ type: 'varchar' })
  diagnosis: string;

  @Column({ type: 'varchar' })
  treatment: string;

  @Column({ type: 'date' })
  created_at: Date;
}