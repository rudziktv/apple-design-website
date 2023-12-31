export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      curatorial_competition: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      foreign_languages: {
        Row: {
          can_be_first: boolean | null
          id: number
          name: string | null
        }
        Insert: {
          can_be_first?: boolean | null
          id?: number
          name?: string | null
        }
        Update: {
          can_be_first?: boolean | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      form: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      form_field: {
        Row: {
          display_name: string
          form_id: number
          id: number
          page: number
          target_column: string
          target_table: string
          type: string
        }
        Insert: {
          display_name: string
          form_id: number
          id?: number
          page: number
          target_column: string
          target_table: string
          type: string
        }
        Update: {
          display_name?: string
          form_id?: number
          id?: number
          page?: number
          target_column?: string
          target_table?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "form_field_form_id_fkey"
            columns: ["form_id"]
            isOneToOne: false
            referencedRelation: "form"
            referencedColumns: ["id"]
          }
        ]
      }
      recruitment_dates: {
        Row: {
          action: string | null
          begin_date: string | null
          dates_range: string | null
          end_date: string | null
          id: number
          order_number: number | null
        }
        Insert: {
          action?: string | null
          begin_date?: string | null
          dates_range?: string | null
          end_date?: string | null
          id?: number
          order_number?: number | null
        }
        Update: {
          action?: string | null
          begin_date?: string | null
          dates_range?: string | null
          end_date?: string | null
          id?: number
          order_number?: number | null
        }
        Relationships: []
      }
      recruitment_profiles: {
        Row: {
          description: string | null
          id: number
          id_school: number | null
          name: string | null
          short_name: string | null
        }
        Insert: {
          description?: string | null
          id?: number
          id_school?: number | null
          name?: string | null
          short_name?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          id_school?: number | null
          name?: string | null
          short_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recruitment_profiles_id_school_fkey"
            columns: ["id_school"]
            isOneToOne: false
            referencedRelation: "recruitment_schools"
            referencedColumns: ["id"]
          }
        ]
      }
      recruitment_schools: {
        Row: {
          id: number
          name: string | null
          short_name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          short_name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          short_name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
